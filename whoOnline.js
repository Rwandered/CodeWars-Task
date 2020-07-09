// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins),
//  create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// У вас есть приложение для группового чата, но кто в сети?

// Вы хотите показать своим пользователям, кто из их друзей в сети и доступен для общения!

// Учитывая ввод массива объектов, содержащих имена пользователей, статус и время с момента 
// последнего действия (в минутах), создайте функцию для определения, кто находится в сети, в автономном режиме и вдали.

// Если кто-то в сети, но его последняя активность была более 10 минут назад, он должен быть рассмотрен.

// Входные данные имеют следующую структуру:

// const users = [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]

// The corresponding output should look as follows:
// Соответствующий вывод должен выглядеть следующим образом:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:
// Если, например, пользователи не подключены к сети, вывод должен выглядеть следующим образом:
// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' 
// (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array 
// []. In this case you should return an empty object {} (empty Dictionary in C#).
// имя пользователя всегда будет строкой, статус всегда будет онлайн или оффлайн
// (перечисление UserStatus в C #) и lastActivity всегда будут иметь число> = 0.

// Наконец, если у вас нет друзей в приложении чата, входные данные будут пустым массивом
// []. В этом случае вы должны вернуть пустой объект {} (пустой словарь в C #).


// lastActivity > 10 и пользователь online -> away
// status - offline 
// status online

const users = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]


// const whosOnline = friends => {

//   let online = [],
//     offline = [],
//     away = []

//   let obj = {}

//   // const {online, offline, away} = 
//   const w = friends.map(friend => {
//     if (friend.status === 'offline') {
//       offline.push(friend.username)
//     } else if (friend.status === 'online' && friend.lastActivity <= 10) {
//       online.push(friend.username)
//     } else {
//       away.push(friend.username)
//     }
//   })

//   if (online.length !== 0) {
//     obj.online = online
//   }
//   if (offline.length !== 0) {
//     obj.offline = offline
//   }
//   if (away.length !== 0) {
//     obj.away = away
//   }


//   // const a = [online, offline, away].filter(e => e.length !== 0)

//   // console.log('OBJ: ', obj);



//   // console.log('Online: ', online);
//   // console.log('Offline: ', offline);
//   // console.log('Away: ', away);
//   // return {
//   //   online: ['David'],
//   //   offline: ['Lucy'],
//   //   away: ['Bob']
//   // } 

//   return obj
// }

const whosOnline = friends => friends.reduce((result, { username, status, lastActivity }) => {
  const finallyStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
  result[finallyStatus] ? result[finallyStatus].push(username) : result[finallyStatus] = [username];
  return result;
}, {})

console.log(whosOnline(users));


// const whosOnline = (friends) => {

//  let status;  

//  const getStatus = friend => 
//    friend.status === 'online' && friend.lastActivity > 10 
//    ? 'away' 
//    : friend.status;

//  return friends.reduce((state, friend) => (
//    status = getStatus(friend),
//    state[status] = state[status] || [],
//    state[status].push(friend.username),
//    state
//  ), {});

// }