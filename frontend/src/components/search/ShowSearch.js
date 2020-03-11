import React from 'react';
import JobCard from '../../components/JobCard';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_SEARCHJOBPOSTS = gql`
    query Jobposts($position: String!){
        searchJobs(position: $position){
            id
            position
            category
            location
            jobtype
            description
            employer{
                id
                name
            }
        }
    }
`;

const ShowSearch = (props) => {
    const { loading, error, data } = useQuery(GET_SEARCHJOBPOSTS, { variables: { position: props.searchString } });
    if (loading) return 'Loading...';
    if (error) return `Error ${error.message}`;

    return (
        <React.Fragment>
            {
                data.searchJobs.map(jobpost => {
                    return <JobCard key={jobpost.id} jobpost={jobpost} />
                })
            }
        </React.Fragment>
    );
}

export default ShowSearch;