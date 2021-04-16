import React from 'react';
// import ReactDOM from "react-dom"
import Container from './Container/Container';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './user.json';
import statisticsData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

// спросить как правильно в app надоб было передать user
// спросить как надо было передавать статистику, если в json не массив: как передать его, чтобы не писать несколько
// как правильо прописывать стили в className = {тут}
// composes почему пишет что неизвестное свойство но работает
// как правильно указать несколько классов
// почему не работает на строках таблицы nth-child

const App = () => {
  return (
    <>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticsData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};

export default App;
