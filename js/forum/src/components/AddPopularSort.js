import { extend } from 'flarum/extend';
import DiscussionList from 'flarum/components/DiscussionList';

export default function () {
    extend(DiscussionList.prototype, 'sortMap', function (map) {
        map.popular = '-views';
        map.unpopular = 'views';
    });
}
