import { Button } from "antd";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Error = () => {
  return (
    <Link href="/">
      <Button icon={<HiOutlineArrowLeft />}
      >
        Voltar para a home
      </Button>
    </Link>
  )
}

export default Error;