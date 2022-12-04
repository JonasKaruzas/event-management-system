import { useContext } from "react";
import styled from "styled-components"
import { AttendeeListContext } from "./AttendeeListState";

const SearchSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Input = styled.input`
  padding: 10px;
  width: 160px;
  border: 1px solid #497174;

  @media (max-width: 850px) {
    width: 100%;
  }

  &:focus {
    background-color: #EFF5F5;
    outline: none;
  }
`

const Select = styled.select`
  margin-left: 20px;
  padding: 10px;
  width: 120px;
  border: 1px solid #497174;

  @media (max-width: 850px) {
    flex: 1;
    width: auto;
  }

  &:focus {
    background-color: #EFF5F5;
    outline: none;
 
  }

`

export function SearchAndSort() {
  const {searchInput, setSearchInput, sortInput, setSortInput} = useContext(AttendeeListContext);

  return (
    <SearchSortContainer>
      <Input type={'text'} placeholder={'Search name'} value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      <form >
        <label>Sort by:</label>
          <Select onChange={(e) => setSortInput(e.target.value)} value={sortInput}>
            <option disabled value=""></option>
            <option value="name-asc">First name ↓</option>
            <option value="name-desc">First name ↑</option>
            <option value="age-asc">Age ↓</option>
            <option value="age-desc">Age ↑</option>
          </Select>
      </form>
    </SearchSortContainer>
  )
}