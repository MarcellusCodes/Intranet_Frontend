import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SecondaryText from "../typography/secondaryText";
import { useQuery } from "react-query";
import ErrorState from "../action/errorState";
import LoadingState from "../action/loadingState";

const FilterTable = ({ telefonliste }) => {
  const { isLoading, data, error } = useQuery(
    "telefonliste",
    () =>
      fetch(`http://192.168.100.60:8055/items/telefonliste/`).then((res) =>
        res.json()
      ),
    { initialData: telefonliste }
  );

  const [searchNames, setSearchNames] = useState("");

  const filteredNames =
    !isLoading &&
    !error &&
    data.data.filter((data) => {
      return data.name.toLowerCase().includes(searchNames.toLowerCase());
    });

  if (isLoading)
    return (
      <>
        <LoadingState />
      </>
    );

  if (error)
    return (
      <>
        <ErrorState />
      </>
    );
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
        }}
        mt={8}
      >
        <SecondaryText sx={{ marginBottom: 1 }}>
          Suchfilter aus allen Telefonlisten
        </SecondaryText>
        <TextField
          fullWidth
          label="Name"
          id="outlined-basic"
          variant="outlined"
          placeholder="Filtern für Namen (geben sie den Namen von dem sie die Telefonnummer suchen ein)"
          onChange={(e) => setSearchNames(e.target.value)}
          color="primary"
          InputLabelProps={{
            style: { color: "#333" },
          }}
          sx={{
            background: "#F7F7F7",
            borderRadius: 1,
          }}
        />
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: 1, borderRadius: 1 }}>
        <Table
          sx={{ minWidth: 650, borderRadius: 1 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Position</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Telefonnummer</TableCell>
              <TableCell align="left">Fax</TableCell>
              <TableCell align="left">E-Mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredNames.map((data) => (
              <TableRow
                key={data.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  width: "100%",
                }}
              >
                <TableCell align="left" component="th" scope="row">
                  {data.position}
                </TableCell>
                <TableCell align="left">{data.name}</TableCell>
                <TableCell align="left">{data.telefonnummer}</TableCell>
                <TableCell align="left">{data.fax}</TableCell>
                <TableCell align="left">{data.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FilterTable;
