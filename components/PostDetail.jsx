import React, { useState } from "react"
import moment from "moment"

const PostDetail = ({ post }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }

  const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = (<b key={index}>{text}</b>);
    }

    if (obj.italic) {
      modifiedText = (<em key={index}>{text}</em>);
    }

    if (obj.underline) {
      modifiedText = (<u key={index}>{text}</u>);
    }
  }

  switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-medium mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8 text-gray-200">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-2xl text-gray-200 font-medium mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
      <div className='bg-post-500 rounded-lg lg:p-0 pb-12 mb-8' >
          <div className="relative overflow-hidden mb-6 rounded-xl">
              <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  className='object-top h-full w-full rounded-xl'
              />
          </div>
          <div className="px-4 lg:px-8 py-5">
              <div className='flex items-center mb-8 w-full'>
                  <div className='flex items-center mb-4 lg:mb-0 w-full  lg:w-auto mr-8'>
                      <img 
                          alt={post.author.name}
                          height="60px"
                          width="60px"
                          className='align-middle rounded-full'
                          src={post.author.photo.url}
                      />
                      <p className='inline align-middle text-zinc-400 ml-3 text-3xl'>{post.author.name}</p>
                  </div>
                  <div className='font-medium text-green-600 bg-green-300 lg:px-2 px-8 rounded-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="lg:visible invisible h-6 w-6 inline mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="align-middle">{moment(post.createdAt).format('DD/MM/YYYY')}</span>
                      {/* <button onClick={handleClick}>Likes ({likes})</button> */}
                  </div>
              </div>
              <h1 className='mb-8 text-3xl font-medium text-zinc-200'>{post.title}</h1>
              {/* {console.log(post.content.raw.children)} */}
              {post.content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                  return getContentFragment(index, children, typeObj, typeObj.type)
              })}
          </div>
      </div>
  )
}

export default PostDetail
