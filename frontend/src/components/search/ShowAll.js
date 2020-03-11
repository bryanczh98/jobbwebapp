import React from 'react';
import JobCard from '../../components/JobCard';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_JOBPOSTS = gql`
    {
        jobposts{
            id
            employerId
            position
            category
            jobtype
            location
            description
            employer{
                id
                name
            }
        }
        
    }
`;

function ShowAll() {
    const { loading, error, data } = useQuery(GET_JOBPOSTS);

    if (loading) return 'Loading...';
    if (error) return `Error ${error.message}`;

    return (
        <React.Fragment>
            {
                data.jobposts.map(jobpost => {
                    return <JobCard key={jobpost.id} jobpost={jobpost} />
                })
            }
        </React.Fragment>
    );
}

export default ShowAll;