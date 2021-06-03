/**
 * return randomized list
 * @param   {array} list  List to be randomized
 * @return  {array}       Randomized List
 */
export function randomizeObjectList(list: any[]) {
  return list.sort((a:any[], b:any[]) => 0.5 - Math.random())
}
