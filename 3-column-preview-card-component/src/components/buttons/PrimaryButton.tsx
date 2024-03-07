interface PrimaryButtonProps {
    buttonText: string
}

const PrimaryButton = ({buttonText}:PrimaryButtonProps) => {
  return (
    <button className="">
          {buttonText}
    </button>
  )
}

export default PrimaryButton
