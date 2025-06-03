export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .normalize("NFD")                   
    .replace(/[\u0300-\u036f]/g, "")  
    .replace(/[^\w\s-]/g, "")           
    .replace(/\s+/g, "-");
}