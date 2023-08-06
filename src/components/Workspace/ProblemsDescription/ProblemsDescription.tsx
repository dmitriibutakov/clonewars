import {useEffect, useState} from "react";
import CircleSkeleton from "@/components/Skeletons/CircleSkeleton";
import RectangleSkeleton from "@/components/Skeletons/RectangleSkeleton";
import {auth, firestore} from "@/firebase/firebase";
import {DBProblem, Problem} from "@/utils/types/problem";
import {arrayRemove, arrayUnion, doc, getDoc, runTransaction, updateDoc} from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar} from "react-icons/ai";
import {BsCheck2Circle} from "react-icons/bs";
import {TiStarOutline} from "react-icons/ti";
import {toast} from "react-toastify";

type ProblemDescriptionProps = {
    problem: Problem
    _solved: Boolean
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({problem, _solved}) => {
    const [user] = useAuthState(auth);
    const {problemDiffClass, currProblem, setCurrProblem, loading} = useGetCurrentProblem(problem.id)
    const {liked, disliked, solved, setData, starred} = useGetUsersDataOnProblem(problem.id);
    const [updating, setUpdating] = useState(false);

    const returnUserDataAndProblemData = async (transaction: any) => {
        const userRef = doc(firestore, "users", user!.uid);
        const problemRef = doc(firestore, "problems", problem.id);
        const userDoc = await transaction.get(userRef);
        const problemDoc = await transaction.get(problemRef);
        return {userDoc, problemDoc, userRef, problemRef};
    };

    const handleLike = async () => {
        if (!user) {
            toast.error("You must be logged in to like a problem", {position: "bottom-right", theme: "dark"});
            return;
        }
        if (updating) return;
        setUpdating(true);
        await runTransaction(firestore, async (transaction) => {
            const {problemDoc, userDoc, problemRef, userRef} = await returnUserDataAndProblemData(transaction);

            if (userDoc.exists() && problemDoc.exists()) {
                if (liked) {
                    // remove problem id from likedProblems on user document, decrement likes on problem document
                    transaction.update(userRef, {
                        likedProblems: userDoc.data().likedProblems.filter((id: string) => id !== problem.id),
                    });
                    // Ts ignore
                    transaction.update(problemRef, {
                        likes: problemDoc.data().likes - 1,
                    });

                    setCurrProblem((prev) => (prev ? {...prev, likes: prev.likes - 1} : null));
                    setData((prev) => ({...prev, liked: false}));
                } else if (disliked) {
                    transaction.update(userRef, {
                        likedProblems: [...userDoc.data().likedProblems, problem.id],
                        dislikedProblems: userDoc.data().dislikedProblems.filter((id: string) => id !== problem.id),
                    });
                    transaction.update(problemRef, {
                        likes: problemDoc.data().likes + 1,
                        dislikes: problemDoc.data().dislikes - 1,
                    });

                    setCurrProblem((prev) =>
                        prev ? {...prev, likes: prev.likes + 1, dislikes: prev.dislikes - 1} : null
                    );
                    setData((prev) => ({...prev, liked: true, disliked: false}));
                } else {
                    transaction.update(userRef, {
                        likedProblems: [...userDoc.data().likedProblems, problem.id],
                    });
                    transaction.update(problemRef, {
                        likes: problemDoc.data().likes + 1,
                    });
                    setCurrProblem((prev) => (prev ? {...prev, likes: prev.likes + 1} : null));
                    setData((prev) => ({...prev, liked: true}));
                }
            }
        });
        setUpdating(false);
    };

    const handleDislike = async () => {
        if (!user) {
            toast.error("You must be logged in to dislike a problem", {position: "bottom-right", theme: "dark"});
            return;
        }
        if (updating) return;
        setUpdating(true);
        await runTransaction(firestore, async (transaction) => {
            const {problemDoc, userDoc, problemRef, userRef} = await returnUserDataAndProblemData(transaction);
            if (userDoc.exists() && problemDoc.exists()) {
                // already disliked, already liked, not disliked or liked
                if (disliked) {
                    transaction.update(userRef, {
                        dislikedProblems: userDoc.data().dislikedProblems.filter((id: string) => id !== problem.id),
                    });
                    transaction.update(problemRef, {
                        dislikes: problemDoc.data().dislikes - 1,
                    });
                    setCurrProblem((prev) => (prev ? {...prev, dislikes: prev.dislikes - 1} : null));
                    setData((prev) => ({...prev, disliked: false}));
                } else if (liked) {
                    transaction.update(userRef, {
                        dislikedProblems: [...userDoc.data().dislikedProblems, problem.id],
                        likedProblems: userDoc.data().likedProblems.filter((id: string) => id !== problem.id),
                    });
                    transaction.update(problemRef, {
                        dislikes: problemDoc.data().dislikes + 1,
                        likes: problemDoc.data().likes - 1,
                    });
                    setCurrProblem((prev) =>
                        prev ? {...prev, dislikes: prev.dislikes + 1, likes: prev.likes - 1} : null
                    );
                    setData((prev) => ({...prev, disliked: true, liked: false}));
                } else {
                    transaction.update(userRef, {
                        dislikedProblems: [...userDoc.data().dislikedProblems, problem.id],
                    });
                    transaction.update(problemRef, {
                        dislikes: problemDoc.data().dislikes + 1,
                    });
                    setCurrProblem((prev) => (prev ? {...prev, dislikes: prev.dislikes + 1} : null));
                    setData((prev) => ({...prev, disliked: true}));
                }
            }
        });
        setUpdating(false);
    };

    const handleStar = async () => {
        if (!user) {
            toast.error("You must be logged in to star a problem", {position: "bottom-right", theme: "dark"});
            return;
        }
        if (updating) return;
        setUpdating(true);

        if (!starred) {
            const userRef = doc(firestore, "users", user.uid);
            await updateDoc(userRef, {
                starredProblems: arrayUnion(problem.id),
            });
            setData((prev) => ({...prev, starred: true}));
        } else {
            const userRef = doc(firestore, "users", user.uid);
            await updateDoc(userRef, {
                starredProblems: arrayRemove(problem.id),
            });
            setData((prev) => ({...prev, starred: false}));
        }

        setUpdating(false);
    };
    return (
        <div className="bg-dark-layer-1">
            {/* TAB */}
            <div className="flex h-11 w-full items-center overflow-x-hidden bg-dark-layer-2 pt-2 text-white">
                <div
                    className={
                        "cursor-pointer rounded-t-[5px] bg-dark-layer-1 px-5 py-[10px] text-xs"
                    }
                >
                    Description
                </div>
            </div>

            <div className="flex h-[calc(100vh-94px)] overflow-y-auto px-0 py-4">
                <div className="px-5">
                    {/* Problem heading */}
                    <div className="w-full">
                        <div className="flex space-x-4">
                            <div className="mr-2 flex-1 text-lg font-medium text-white">
                                {problem.title}
                            </div>
                        </div>
                        {!loading && currProblem && <div className="mt-3 flex items-center">
                            <div
                                className={`inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize ${problemDiffClass}`}
                            >
                                {currProblem.difficulty} kyu
                            </div>
                            {(solved || _solved) && (
                                <div
                                    className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
                                    <BsCheck2Circle/>
                                </div>
                            )}
                            <div onClick={handleLike}
                                 className="ml-4 flex cursor-pointer items-center space-x-1 rounded p-[3px]  text-lg text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3">
                                {liked && !updating && <AiFillLike className='text-dark-blue-s'/>}
                                {!liked && !updating && <AiFillLike/>}
                                {updating && <AiOutlineLoading3Quarters className='animate-spin'/>}
                                <span className='text-xs'>{currProblem.likes}</span>
                            </div>
                            <div
                                onClick={handleDislike}
                                className="text-green-s ml-4 flex cursor-pointer items-center space-x-1 rounded  p-[3px] text-lg text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3">
                                {disliked && !updating && <AiFillDislike className='text-dark-blue-s'/>}
                                {!disliked && !updating && <AiFillDislike/>}
                                {updating && <AiOutlineLoading3Quarters className='animate-spin'/>}
                                <span className="text-xs">{currProblem.dislikes}</span>
                            </div>
                            <div
                                onClick={handleStar}
                                className="text-green-s ml-4  cursor-pointer rounded  p-[3px] text-xl text-dark-gray-6 transition-colors duration-200 hover:bg-dark-fill-3 ">
                                {starred && !updating && <AiFillStar className='text-dark-yellow'/>}
                                {!starred && !updating && <TiStarOutline/>}
                                {updating && <AiOutlineLoading3Quarters className='animate-spin'/>}
                            </div>
                        </div>}
                        {loading && (
                            <div className='mt-3 flex space-x-2'>
                                <RectangleSkeleton/>
                                <CircleSkeleton/>
                                <RectangleSkeleton/>
                                <RectangleSkeleton/>
                                <CircleSkeleton/>
                            </div>
                        )}
                        {/* Problem Statement(paragraphs) */}
                        <div className="text-white" dangerouslySetInnerHTML={
                            {__html: problem.problemStatement}
                        }/>

                        {/* Examples */}
                        <div className="mt-4">
                            {problem.examples.map((example, index) => (
                                <div key={example.id}>
                                    <p className="font-medium text-white ">Example {problem.examples.length > 1 && index + 1}: </p>
                                    {example.img && (
                                        <img className="mt-3" src={example.img} alt={example.id.toString()}/>
                                    )}
                                    <div className="example-card">
                  <pre>
                      <p className="mb-2">
                    <strong className="text-white">Input: </strong> {example.inputText}
                          </p>
                         <p className="mb-2">
                    <strong>Output:</strong>{example.outputText} <br/>
                         </p>
                         <p className="mb-2">
                      {example.explanation &&
                          <>
                              <strong>Explanation:</strong> {example.explanation}
                          </>}
                         </p>
                  </pre>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Constraints */}
                        <div className="pb-4">
                            <div className=" font-medium text-white">Constraints:</div>
                            <ul className="ml-5 list-disc text-white">
                                <div dangerouslySetInnerHTML={{__html: problem.constraints}}></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProblemDescription

function useGetCurrentProblem(problemId: string) {
    const [currProblem, setCurrProblem] = useState<DBProblem | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [problemDiffClass, setProblemDiffClass] = useState<string>('')
    useEffect(() => {
// get problem from db
        const getCurrentProblem = async () => {
            setLoading(true)
            const docRef = doc(firestore, "problems", problemId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                const problem = docSnap.data() as DBProblem
                setCurrProblem({id: docSnap.id, ...problem} as DBProblem)
                setProblemDiffClass(
                    problem.difficulty >= 7 ? "bg-olive text-olive" : problem.difficulty > 5 ? "bg-dark-yellow text-dark-yellow" : "bg-dark-pink text-dark-pink"
                )
            }
            setLoading(false)
        }
        getCurrentProblem()
    }, [problemId])
    return {currProblem, setCurrProblem, loading, problemDiffClass}
}

function useGetUsersDataOnProblem(problemId: string) {
    const [data, setData] = useState({liked: false, disliked: false, starred: false, solved: false});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getUsersDataOnProblem = async () => {
            const userRef = doc(firestore, "users", user!.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const data = userSnap.data();
                const {solvedProblems, likedProblems, dislikedProblems, starredProblems} = data;
                setData({
                    liked: likedProblems.includes(problemId), // likedProblems["consecutive-strings", ...]
                    disliked: dislikedProblems.includes(problemId),
                    starred: starredProblems.includes(problemId),
                    solved: solvedProblems.includes(problemId),
                });
            }
        };

        if (user) getUsersDataOnProblem();
        return () => setData({liked: false, disliked: false, starred: false, solved: false});
    }, [problemId, user]);

    return {...data, setData};
}
