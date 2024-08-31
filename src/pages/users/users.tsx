import { useGetUsersQuery } from '../../services/postServise';
import './users.css';

export const UsersPage = () => {

    const {
        data: users = [],
        isLoading,
        error,
      } = useGetUsersQuery();
    
      if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;
    
      if (error) return <h1 className="p-10">ERROR</h1>; // nuw we dont need err, it is just doesnt show
    
console.log(users)
    return(
        <h1 className='header'>USERS LIST</h1>
    )
}