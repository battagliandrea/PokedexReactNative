// type Pokemon = {
//   id: number,
//   name?: string,
//   url?: string,
//   avatar?: string
// };
class Pokemon {
  constructor(id, name, url, imageUrl) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.imageUrl = imageUrl;
  }
  // getFullName() {
  //   return this.lastName + " " + this.firstName;
  // }

  static class(obj) {
    const splittedString = obj.url.split('/');
    const id = splittedString[splittedString.length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return new Pokemon(id, obj.name, obj.url, imageUrl);
  }
}

export default Pokemon;
