export const savePostsToLocalStorage = async (posts) => {
  try {
    localStorage.setItem('BLOG_POSTS', JSON.stringify(posts))
  } catch (err) {
    console.log({ err })
  }
}

export const fetchPosts = async () => {}
