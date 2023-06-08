export type AuthInputKey = "signup" | "signin" | "forgot"
export type InputAuthCallback = (
  e: React.ChangeEvent<HTMLInputElement>,
  key: AuthInputKey,
) => void
export type AuthModalInputs = {[key in AuthInputKey]: AuthModalInput[]}
export type AuthModalInput = {
  id: string;
  placeholder: string;
  text: string;
  value: string;
}