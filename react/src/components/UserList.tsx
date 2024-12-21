
import { FormData } from '../types/user.types'

type Props = {
  user:FormData,
  onEdit: (id: number) => void,
  onDelete: (id: number) => void,
}

const UserList = ({ user, onDelete, onEdit }: Props) => {
  return (
    <div>
      <p>{user.fullname} </p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  )
}

export default UserList