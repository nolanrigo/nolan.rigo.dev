declare global {
  interface Window {
    $crisp:
      | {
          push(params: ["do", "chat:open"]): void;
        }
      | undefined;
  }
}

export function openCrisp() {
  window?.$crisp?.push(["do", "chat:open"]);
}
