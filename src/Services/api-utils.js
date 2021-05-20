export const allCharacters = async () => {
    const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
    const results = await res.json();
    return results
}
export const characterById = async (id) => {
const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
const { _id, name, image } = await res.json();
return {
    id: _id,
    name,
    image,
}
}
