interface AboutMeData {
  name: string;
  description: string;
  image: string;
  email: string;
}

export default function AboutMeData(): AboutMeData {
  return {
    name: "Mateus Mattos",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      volutpat ex eu rhoncus condimentum. Proin maximus enim nisl, vitae
      porttitor quam pellentesque convallis. Sed sed ex lacinia, sollicitudin
      erat quis, malesuada ligula. Aliquam erat volutpat. Aliquam ac aliquam
      elit. Etiam efficitur tellus tristique purus lobortis, efficitur accumsan
      mauris facilisis. Morbi porttitor risus ligula, sit amet accumsan nulla
      viverra maximus. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec dapibus lorem libero, sed consequat
      augue tincidunt eget. Vivamus vel justo ut tortor rutrum rhoncus eget eget
      eros. Morbi vitae vulputate lectus.`,
    image: "/images/person.jpg",
    email: "teste@teste.com",
  };
}
