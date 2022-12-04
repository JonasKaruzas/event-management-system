import { useContext } from "react";
import styled from "styled-components"
import { AttendeeListContext } from "./AttendeeListState";

const SearchSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`

const Input = styled.input`
  padding: 10px;
  width: 160px;
`
const Select = styled.select`
  margin-left: 20px;
  padding: 10px;
  width: 100px;
`

export function SearchAndSort() {
  const {searchInput, setSearchInput, sortInput, setSortInput} = useContext(AttendeeListContext);

  return (
    <SearchSortContainer>
      <Input type={'text'} placeholder={'Search name'} value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      <form >
        <label>
          Sort by:
          <Select onChange={(e) => setSortInput(e.target.value)} value={sortInput}>
            <option disabled value=""></option>
            <option value="name-asc">First name ↓</option>
            <option value="name-desc">First name ↑</option>
            <option value="age-asc">Age ↓</option>
            <option value="age-desc">Age ↑</option>
          </Select>
        </label>
      </form>
    </SearchSortContainer>
  )
}