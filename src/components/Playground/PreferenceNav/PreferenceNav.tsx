import {
  AiOutlineFullscreen,
  AiOutlineSetting,
} from "react-icons/ai"

type PreferenceNavProps = {}

const PreferenceNav: React.FC<PreferenceNavProps> = ({}) => {
  return (
    <div className="flex h-11 w-full items-center justify-between bg-dark-layer-2 ">
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded bg-dark-fill-3 px-2 py-1.5 font-medium  text-dark-label-2 hover:bg-dark-fill-2 focus:outline-none">
          <div className="flex items-center px-1">
            <div className="text-label-2 text-xs dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="m-2 flex items-center">
        <button className="preferenceBtn group">
          <div className="h-4 w-4 text-lg font-bold text-dark-gray-6">
            <AiOutlineSetting />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>

        <button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineFullscreen />
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
      </div>
    </div>
  )
}
export default PreferenceNav
