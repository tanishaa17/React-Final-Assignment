import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './Navbar';
import { getHomePageData } from '../Redux/Actions/Action';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#198754",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const Home = () => {
    const { classData } = useSelector((store) => store.data); // data is taken from rootReducer(store.js)
    console.log("classData", classData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHomePageData());
    }, [])

    return (
        <>
            <Navbar />
            <h2 style={{ color: "#198754", marginTop:"25px" }}>Teacher's Details</h2>
            <TableContainer component={Paper} style={{ margin: "auto", width: "60%" }} >
                <Table sx={{ minWidth: 600 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="centre">Sr.&nbsp;No.</StyledTableCell>
                            <StyledTableCell align="centre">Name</StyledTableCell>
                            <StyledTableCell align="centre">Gender</StyledTableCell>
                            <StyledTableCell align="centre">Age</StyledTableCell>
                            <StyledTableCell align="centre">Class</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {classData.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.teacherId[0].id}
                                </StyledTableCell>
                                <StyledTableCell align="centre">{row.teacherId[0].name}</StyledTableCell>
                                <StyledTableCell align="centre">{row.teacherId[0].gender}</StyledTableCell>
                                <StyledTableCell align="centre">{row.teacherId[0].age}</StyledTableCell>
                                <StyledTableCell align="centre">{row.subjectId.length}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>


    )
}
