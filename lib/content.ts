import enseignerContent from "@/app/content/enseigner.content.json";

export function getContent() {
  return enseignerContent;
}

export type Content = typeof enseignerContent;

