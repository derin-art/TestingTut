type GreetProps = {
  name?: string;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      Hello {props.name} {props.name ? "Hey" : "Noice"}
    </div>
  );
}
