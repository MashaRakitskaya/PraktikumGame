import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Forum from './Forum';
import userEvent from '@testing-library/user-event';
import { FORUM_PATH } from '../../utils/constants';

describe('Forum component', () => {
  it('render Forum', () => {
    const { asFragment } = render(<Forum />, { wrapper: BrowserRouter });
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });

  it('get ForumChat on ForumTopicItem click', async () => {
    window.history.pushState({}, 'Forum page', FORUM_PATH);
    render(<Forum />, { wrapper: BrowserRouter });

    const topicItem = screen.getAllByRole('topic');
    userEvent.click(topicItem[0]);

    await waitFor(() => {
      expect(screen.getByRole('forumChat')).toMatchSnapshot();
    });
  });
});
