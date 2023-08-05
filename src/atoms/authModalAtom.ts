import {atom} from "recoil"

export type AuthModalState = {
    isOpen: boolean
    type: "signin" | "signup" | "forgot"
}
const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type: "signin",
}
export const authModalState = atom<AuthModalState>({
    key: "authModalState",
    default: initialAuthModalState,
})
