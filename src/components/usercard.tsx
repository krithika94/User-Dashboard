import { User } from '../types';

interface UserCardProps {
    user: User;
    onClick: () => void;
}

export const UserCard = ({ user, onClick }: UserCardProps) => {
    const { name, email, address, company } = user;
    const formattedAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

    return (
        <div className="card bg-base-100 w-full shadow-xl mt-4" onClick={onClick}> 
            <div className="card-body p-[1.3rem] text-gray-500"  >
                <p>{name}</p>
                <p>{email}</p>
                <p>{formattedAddress}</p>
                <p>{company.name}</p>
            </div>
        </div>
    );
};