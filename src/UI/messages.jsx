const comments = [
    {
      id: 1,
      name: 'Leslie Alexander',
      content:
        'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
      date: '1d ago',
      dateTime: '2023-03-04T15:54Z',
    },
    {
      id: 2,
      name: 'Michael Foster',
      content:
        'Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.',
      date: '2d ago',
      dateTime: '2023-03-03T14:02Z',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      content:
        'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
      date: '2d ago',
      dateTime: '2023-03-03T13:23Z',
    },
    {
      id: 4,
      name: 'Lindsay Walton',
      content:
        'Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.',
      date: '3d ago',
      dateTime: '2023-03-02T21:13Z',
    },
  ]
  
  export default function Messages() {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {comments.map((comment) => (
          <li key={comment.id} className="flex gap-x-4 py-5">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/user.png" alt="" />
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                <p className="text-sm font-semibold leading-6 text-gray-900">{comment.name}</p>
                <p className="flex-none text-xs text-gray-600">
                  <time dateTime={comment.dateTime}>{comment.date}</time>
                </p>
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  