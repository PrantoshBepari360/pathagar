import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Separator,
  SortWraper,
  WraperRadio,
  WraperTypo,
} from "@/src/styles/shopStyle";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "@mui/joy/Slider";

function priceValue(price) {
  return `${price}`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 650,
    label: "650",
  },
  {
    value: 1300,
    label: "130",
  },
  {
    value: 1950,
    label: "1950",
  },
  {
    value: 2600,
    label: "2600",
  },
];

export const ShopSideBar = () => {
  const [sort, setSort] = useState("best-seller");
  const [filter, setFilter] = useState("jafor-wazed");
  const [publisher, setPublisher] = useState("bangla-akademi");
  const [price, setPrice] = useState([0, 650]);
  const [language, setLanguage] = useState("bengoli");

  console.log(sort, filter, publisher, price, language);

  const sortHandleChange = (event) => {
    setSort(event.target.value);
  };

  const filterHandleChange = (event) => {
    setFilter(event.target.value);
  };

  const publisherHandleChange = (event) => {
    setPublisher(event.target.value);
  };

  const priceHandleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const languageHandleChange = (event, newValue) => {
    setLanguage(newValue);
  };
  return (
    <>
      <Box>
        <SortWraper>
          <WraperTypo variant="h6">Sort</WraperTypo>
          <WraperTypo variant="h6">Reset Sort</WraperTypo>
        </SortWraper>
        <WraperRadio>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={sort}
              onChange={sortHandleChange}
            >
              <FormControlLabel
                value="best-seller"
                control={<Radio />}
                label="Best Seller"
              />
              <FormControlLabel
                value="new-relased"
                control={<Radio />}
                label="New Released"
              />
              <FormControlLabel
                value="price-low-to-high"
                control={<Radio />}
                label="Price - Low to High"
              />
              <FormControlLabel
                value="price-high-to-low"
                control={<Radio />}
                label="Price - High to Low"
              />
              <FormControlLabel
                value="discount-low-to-high"
                control={<Radio />}
                label="Discount - Low to High"
              />
              <FormControlLabel
                value="discount-high-to-low"
                control={<Radio />}
                label="Discount - High to Low"
              />
            </RadioGroup>
          </FormControl>
        </WraperRadio>
      </Box>
      <Separator />
      <SortWraper >
        <WraperTypo>Filter</WraperTypo>
        <WraperTypo>Reset Filter</WraperTypo>
      </SortWraper>

      <Box
        border="1px solid black"
        borderTop="0px"
        borderRadius="0px 0px 10px 10px"
        padding="0px 20px"
      >
        <WraperTypo variant="h6">
         Author
        </WraperTypo>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={filter}
            onChange={filterHandleChange}
          >
            <FormControlLabel
              value="jafor-wazed"
              control={<Radio />}
              label="Jafor Wazid"
            />
            <FormControlLabel
              value="new-relased"
              control={<Radio />}
              label="New Released"
            />
            <FormControlLabel
              value="price-low-to-high"
              control={<Radio />}
              label="Price - Low to High"
            />
            <FormControlLabel
              value="price-high-to-low"
              control={<Radio />}
              label="Price - High to Low"
            />
            <FormControlLabel
              value="discount-low-to-high"
              control={<Radio />}
              label="Discount - Low to High"
            />
            <FormControlLabel
              value="discount-high-to-low"
              control={<Radio />}
              label="Discount - High to Low"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Separator />

      <Box border="1px solid black" borderRadius="10px" padding="0px 20px">
      <WraperTypo variant="h6">
         Publisher
        </WraperTypo>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={publisher}
            onChange={publisherHandleChange}
          >
            <FormControlLabel
              value="bangla-akademi"
              control={<Radio />}
              label="Bangla Akademi"
            />
            <FormControlLabel
              value="new-relased"
              control={<Radio />}
              label="New Released"
            />
            <FormControlLabel
              value="price-low-to-high"
              control={<Radio />}
              label="Price - Low to High"
            />
            <FormControlLabel
              value="price-high-to-low"
              control={<Radio />}
              label="Price - High to Low"
            />
            <FormControlLabel
              value="discount-low-to-high"
              control={<Radio />}
              label="Discount - Low to High"
            />
            <FormControlLabel
              value="discount-high-to-low"
              control={<Radio />}
              label="Discount - High to Low"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Separator />

      <Box sx={{ padding: 3, border: 1, borderRadius: 2 }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          value={price}
          onChange={priceHandleChange}
          valueLabelDisplay="auto"
          getAriaValueText={priceValue}
          marks={marks}
          step={10}
          min={0}
          max={2600}
        />
      </Box>
      <Separator />

      <Box border="1px solid black" borderRadius="10px" padding="0px 20px">
      <WraperTypo variant="h6">
         Language
        </WraperTypo>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={language}
            onChange={languageHandleChange}
          >
            <FormControlLabel
              value="bengoli"
              control={<Radio />}
              label="Bengoli"
            />
            <FormControlLabel
              value="english"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="outhers-language"
              control={<Radio />}
              label="Outhers Language"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Separator />
    </>
  );
};
