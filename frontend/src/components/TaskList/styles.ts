import styled from "styled-components";

export const TaskListContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

export const TaskListContent = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 64px 72px;
  background-color: #fff;
  border-radius: 25px;
  position: relative;
  top: -60px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    color: var(--text);

    .top-area {
      display: flex;
      justify-content: center;
      justify-content: space-between;
      width: 100%;

      .input-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        input {
          background: gray;
          border: 0;
          color:  var(--text);
          padding: 12px 24px;
          background-color: var(--background);;
          border-radius: 8px;
          border: 0;

          &::placeholder {
            color: var(--text-light);
          }
        }

        button {
          padding: 12px;
          border-radius: 8px;
          border: 0;
        }
      }
    }

    .tasks-stats {
      display: flex;
      justify-content: center;
      justify-content: flex-start;
      width: 100%;
      gap: 16px;

      .tasks-stats-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        h2 {
          font-weight: 400;
          font-size: 16px;
        }
        span {
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
  }
`;

export const TasksTable = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  list-style: none;
  gap: 8px;

  .taskRow {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;

    .title-area {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .task-checker, .task-remover{
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        cursor:pointer
      }
    }
  }
`;
