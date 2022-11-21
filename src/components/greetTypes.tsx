type GreetTypesProps = {
  name?: string;
  age: number;
  range?: any;
};

export default function GreetTypes(props: GreetTypesProps) {
  return (
    <div>
      {props.name} is {props.age} years old
    </div>
  );
}
