import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useSelector, useDispatch } from "react-redux";
import { allSongs, columnSongData, fromShows, toggleFromShows, addSongDetails } from "../features/shows/showsSlice"
import { useNavigate } from "react-router-dom";

function SongDataTable() {
    const { SearchBar } = Search;
    const allSongData = useSelector(allSongs)
    const columns = useSelector(columnSongData)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 15,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
    })

    const tableRowEvents = {
        onClick: (_, row) => {
            dispatch(
                toggleFromShows({
                    fromShows: false
                }))
            dispatch(
                addSongDetails(row.name, row.album, row.lyrics)
            )

            navigate("../songdetails");
        }
    }

    return (
        <div className="App" >
            <ToolkitProvider
                keyField="id"
                data={allSongData}
                columns={columns}
                bootstrap4
                search={{
                    searchFormatted: true
                }}
            >
                {
                    props => (
                        <div>
                            <div>
                                <div className="songSearch">
                                    <SearchBar {...props.searchProps} placeholder="Search" autofocus />
                                </div>
                            </div>
                            <div className="tablecontain">
                                <BootstrapTable
                                    sort={{ dataField: 'timestamp', order: 'desc' }}
                                    bordered={false}
                                    pagination={pagination}
                                    rowEvents={tableRowEvents}
                                    rowStyle={{ backgroundColor: '#0d0d0d', color: 'white', cursor: 'pointer' }}
                                    {...props.baseProps}
                                />
                            </div>
                        </div>
                    )
                }
            </ToolkitProvider>
        </div >
    );
}

export default SongDataTable;
