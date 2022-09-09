import React, { useEffect, useState, useMemo } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Preloader from "../Preloader";
import Card from "../Card";
import Button from "../shared/Button";
import { getData } from "../../../services/api/api";
import "./styles.sass";

export default function CardList({ users, setUsers, setIsLoading, isLoading }) {
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getData("users", null, { page: nextPage, count: 6 });

      const sortedUsers = data.users.sort(
        (a, b) => a.registration_timestamp > b.registration_timestamp
      );

      if (nextPage > 1) {
        setUsers((users) => [...users, ...sortedUsers]);
        setIsLoading(false);
        if (data.total_pages === nextPage) {
          setNextPage(null);
        }
      } else if (nextPage === 1) {
        setUsers(sortedUsers);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [nextPage]);

  return (
    <div className="сardList">
      {isLoading && users.length === 0 && <Preloader />}
      <ul className="cards">
        <TransitionGroup>
          {users.map((user) => {
            return (
              <CSSTransition key={user.id} timeout={500} classNames="item">
                <li className="cards__card" key={user.id}>
                  <Card {...user} />
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ul>
      {isLoading && users.length !== 0 && nextPage && <Preloader />}
      {nextPage && !isLoading && (
        <Button
          handleFn={() => {
            setNextPage((p) => p + 1);
          }}
          title="Show more"
          big
        />
      )}
    </div>
  );
}
