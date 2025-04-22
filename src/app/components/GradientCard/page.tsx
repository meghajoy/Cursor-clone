interface Contains{
    heading: string;
    description: string;
    img: string;
    video?: string;
}
export default function GradientCard({
    heading,
    description,
    img,
    video,
}:Contains) {
  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      {img && video && (<img src="{img}" alt="Image" />)}
    </div>
  )
}
