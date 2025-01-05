import cn from 'classnames';
import { NavLink } from 'react-router';

interface NavMenuItemProps {
    path: string;
    title: string;
}

export default function NavMenuItem({ path, title }: NavMenuItemProps) {
    return (
        <NavLink
            className={({ isActive }) =>
                cn(
                    'inline-flex items-center bg-white px-1 hover:border-gray-300',
                    {
                        'border-b-2 border-black hover:border-black': isActive,
                    },
                    {
                        'border-b-2 border-white': !isActive,
                    }
                )
            }
            to={path}
        >
            {title}
        </NavLink>
    );
}
