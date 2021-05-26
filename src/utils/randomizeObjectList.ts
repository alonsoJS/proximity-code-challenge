export function randomizeObjectList(list: any[]) {
  return list.sort((a:any[], b:any[]) => 0.5 - Math.random())
}
