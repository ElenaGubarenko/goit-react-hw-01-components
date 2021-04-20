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

// спросить как сделать так, чтобы stats в user.json перебирался. for (let key in obj) {key obj[key]} вот так не получается. или я чтото не то делаю. как ее правильно записать в profile.js

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
        <Statistics stats={statisticsData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};

export default App;
