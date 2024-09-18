import PropTypes from "prop-types"
import { getAvatar } from "../../utils/generateImages"

export function FollowItem({name, username}){

    const avatar = getAvatar(`${name + Math.floor(Math.random() * 1000)}@email.com`)

    return (
        <div className="flex items-center justify-between py-3 hover:bg-gray-800 transition duration-200">
            <div className="flex items-center">
                <img src={avatar} alt="User avatar" className="w-12 h-12 rounded-full mr-3"/>
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-500">@{username}</p>
                </div>
            </div>
            <div>
                <button className="text-black bg-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 transition duration-200">Seguir</button>
            </div>
        </div>
    )
}

FollowItem.protoTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
}