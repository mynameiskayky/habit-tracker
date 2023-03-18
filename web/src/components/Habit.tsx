interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-purple-500 text-9xl">
      {props.completed}
    </div>
  )
}