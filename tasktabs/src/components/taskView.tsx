import * as React from 'react';
import styled from 'styled-components';

import { TaskProgressBar } from './progressBar';

const Container = styled.div`
    width: 932px;
    border-width: 5px;
    border-style: solid;
    padding: 50px;
`;

const Title = styled.div`
    font-size: 72px;
    margin-left: 50px;
    margin-top: 10px;
`;

const SaveButton = styled.button`
    width: 177px;
    height: 100px;
`;

const SaveButtonText = styled.div`
    font-size: 32px;
    margin: 30px;
`;

// The delete button is absolutely positioned to the right because the length of the
// title could influence the button's position.
const DeleteButton = styled.button`
    width: 177px;
    height: 40px;
    position: absolute;
    top: 100px;
    right: 50px;
`;

const DeleteButtonText = styled.div`
    font-size: 32px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

interface TaskViewProps {
    name: string;
    completion: number;
    description: string;
};

// TaskView is intended to be the center view for all tasks, substasks and project heads.
export class TaskView extends React.Component<TaskViewProps>{
    name: string;
    displayedName: string;

    constructor(props: TaskViewProps) {
        super(props);

        this.name = props.name;
        this.displayedName = this.name;
    }

    // If the title is too long, we should shorten it to fit the space we have.
    checkNameLength = () => {
        if (this.name.length > 16) {
            this.displayedName = this.name.substring(0, 15);
            this.displayedName += "...";
        }
    }

    render() {
        this.checkNameLength();
        return (
            <Container>
                <Row>
                    <SaveButton>
                        <SaveButtonText>Save</SaveButtonText>
                    </SaveButton>
                    <Title>{this.displayedName}</Title>
                    <DeleteButton>
                        <DeleteButtonText>Delete</DeleteButtonText>
                    </DeleteButton>
                </Row>
                <TaskProgressBar percentage={this.props.completion} />
            </Container>
        );
    }
};
