const initState = {
  posts: [
    {
      id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' +
        'Incidunt soluta, dolor id qui expedita dicta fugiat tempora illo voluptate,' +
        'cumque suscipit sunt commodi ea est quidem, vitae doloribus eveniet necessitatibus.' +
        'Ut cum odit doloremque nesciunt in at quia veritatis maiores illum, veniam' +
        'quas quaerat nemo molestias molestiae impedit esse voluptates.'
    },
    {
      id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' +
        'Incidunt soluta, dolor id qui expedita dicta fugiat tempora illo voluptate,' +
        'cumque suscipit sunt commodi ea est quidem, vitae doloribus eveniet necessitatibus.' +
        'Ut cum odit doloremque nesciunt in at quia veritatis maiores illum, veniam' +
        'quas quaerat nemo molestias molestiae impedit esse voluptates.'
    },
    {
      id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' +
        'Incidunt soluta, dolor id qui expedita dicta fugiat tempora illo voluptate,' +
        'cumque suscipit sunt commodi ea est quidem, vitae doloribus eveniet necessitatibus.' +
        'Ut cum odit doloremque nesciunt in at quia veritatis maiores illum, veniam' +
        'quas quaerat nemo molestias molestiae impedit esse voluptates.'
    }
  ]
}
const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}
export default rootReducer