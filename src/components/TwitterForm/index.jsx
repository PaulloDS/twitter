import {
  faCalendarAlt,
  faChartBar,
  faFilm,
  faImage,
  faMapMarkedAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useRef } from "react";

export function TwitterForm({ onTweet }) {
  const textAreaRef = useRef();

  function handleSubmit() {
    if (textAreaRef.current.value) {
      onTweet(textAreaRef.current.value);
      textAreaRef.current.value = "";
    }
  }

  return (
    <div className="border-b border-gray-800 p-4">
      <textarea
        className="w-full bg-transparent text-white text-xl resize-none outline-none"
        placeholder="No que está pensando?"
        ref={textAreaRef}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <FontAwesomeIcon
            icon={faImage}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFilm}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faChartBar}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSmile}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="text-twitter-blue cursor-pointer"
          />
        </div>
        <button
          className="bg-twitter-blue text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

TwitterForm.propTypes = {
  onTweet: PropTypes.func
}