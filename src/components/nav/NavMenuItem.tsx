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
                    'inline-flex items-center bg-white px-1',
                    {
                        'border-b-2 border-black hover:border-black': isActive,
                    },
                    {
                        'border-b-2 border-transparent hover:border-gray-300':
                            !isActive,
                    }
                )
            }
            to={path}
        >
            {title}
        </NavLink>
    );
}
