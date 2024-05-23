import roads from "./Request/Roads"

// export const highways = ['М-5', 'А-310', 'Р-254', 'Р-354']
export const highways = roads;

export const point_types = ['АЗС', 'Кафе', 'Автосервис', 'Гостиница', 'ЭЗС', 'Шиномонтаж', 'Автомойка', 'Километр', 'Событие']

export const FormData = {
    "Название": "name",
    "Широта": "latitude", 
    "Долгота": "longitude", 
    "Дорога": highways,
    "Тип точки": point_types,
    "Регион": "region",
    "Описание": "decription"
}