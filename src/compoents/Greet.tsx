

interface greetProps{
  name:string,

}
export default function Greet({name}:greetProps) {
  return (
    <div>
      <h1>Hello,  {name}</h1>
    </div>
  )
}
