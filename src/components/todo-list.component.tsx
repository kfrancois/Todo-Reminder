import { Button, List } from 'antd';
import React from 'react';
import { TodoItem } from '../types/todo-item';

interface ITodoListProps {
    data: TodoItem[];
    removeItem: (index: number) => void;
}

export default class TodoListComponent extends React.Component<ITodoListProps> {
    public render() {
        const { data, removeItem } = this.props;
        const remove = (index: number) => {
            const removeAction = () => removeItem(index);
            return <Button onClick={removeAction}>Remove</Button>;
        };

        return (
            <List
                locale={{ emptyText: 'test' }}
                dataSource={data}
                // tslint:disable-next-line:jsx-no-lambda
                renderItem={(item: TodoItem) => (
                    <List.Item
                        actions={[remove(0)]}
                        style={{ paddingLeft: '5rem' }}
                    >
                        <List.Item.Meta title={item.text} />
                    </List.Item>
                )}
            />
        );
    }

}
