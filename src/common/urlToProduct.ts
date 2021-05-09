export function urlToProduct (url:string):string {
  switch (url) {
    case 'hookah': return 'Кальяны'
    case 'all': return 'Всё'
    case 'tobacco': return 'Табак'
    case 'coals': return 'Угли'
    case 'bowls': return 'Чаши'
    case 'accessories': return 'Аксессуары'
    default: return 'wrongURL';
  }
}