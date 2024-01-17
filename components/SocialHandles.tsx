import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaRss } from 'react-icons/fa'

const SocialHandles = () => {
    const items = [
        { name: "Github", icon: FaGithub, link: "https://www.github.com/vgnshiyer" },
        { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/vgnshiyer" },
        { name: "Email", icon: FaEnvelope, link: "mailto:vgnshiyer@asu.edu" },
        { name: "Twitter", icon: FaTwitter, link: "https://www.twitter.com/vgnshiyer" },
        // { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/vgnshiyer" },
        { name: "RSS", icon: FaRss, link: "https://vgnshiyer.dev/feed.xml" },
    ];

  return (
    <div className="flex flex-row justify-center space-x-10 my-8">
        {items.map((item: any, index) => {
            return (
                <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                    <item.icon className="hover:text-contrast-light dark:hover:text-contrast-dark text-3xl cursor-pointer" />
                </a>
            )
        })}
    </div>
  )
}

export default SocialHandles
