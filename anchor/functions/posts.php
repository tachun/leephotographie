<?php

/**
 * Returns true if there is at least one post
 *
 * @return bool
 */
function has_posts() {
	return Registry::get('total_posts', 0) > 0;
}

/**
 * Returns true while there are still items in the array.
 *
 * Updates the current article object in the Registry on each call.
 *
 * @return bool
 */
function posts() {
	$posts = Registry::get('posts');

	if($posts instanceof Items) {
		if($result = $posts->valid()) {
			// register single post
			Registry::set('article', $posts->current());

			// move to next
			$posts->next();
		}
		// back to the start
		else $posts->rewind();

		return $result;
	}

	return false;
}

/**
 * Returns a html link to the next page of posts
 *
 * @return string
 */
function posts_next($text = 'Next &rarr;', $default = '') {
	$total = Registry::get('total_posts');
	$offset = Registry::get('page_offset');
	$per_page = Config::meta('posts_per_page');
	$page = Registry::get('page');
	$url = base_url($page->slug . '/');

	// filter category
	if($category = Registry::get('post_category')) {
		$url = base_url('category/' . $category->slug . '/');
	}

	$pagination = new Paginator(array(), $total, $offset, $per_page, $url);

	return $pagination->prev_link($text, $default);
}

/**
 * Returns a html link to the previous page of posts
 *
 * @return string
 */
function posts_prev($text = '&larr; Previous', $default = '') {
	$total = Registry::get('total_posts');
	$offset = Registry::get('page_offset');
	$per_page = Config::meta('posts_per_page');
	$page = Registry::get('page');
	$url = base_url($page->slug . '/');

	// filter category
	if($category = Registry::get('post_category')) {
		$url = base_url('category/' . $category->slug . '/');
	}

	$pagination = new Paginator(array(), $total, $offset, $per_page, $url);

	return $pagination->next_link($text, $default);
}

/**
 * Returns the total of published posts
 *
 * @return string
 */
function total_posts() {
	return Registry::get('total_posts');
}

/**
 * Returns true if there is more posts than the posts per page causing
 * pagination to be generated
 *
 * @return bool
 */
function has_pagination() {
	return Registry::get('total_posts') > Config::meta('posts_per_page');
}

/**
 * Returns the number of posts per page, if the total number of posts is less
 * than the number of posts per page value then the total posts is returned
 *
 * @return string
 */
function posts_per_page() {
	return min(Registry::get('total_posts'), Config::meta('posts_per_page'));
}



function rwar_latest_posts($limit = 3) {
    // only run on the first call
    if( ! Registry::has('rwar_latest_posts')) {
        // capture original article if one is set
        if($article = Registry::get('article')) {
            Registry::set('original_article', $article);
        }
    }

    if( ! $posts = Registry::get('rwar_latest_posts')) {
        $posts = Post::where('status', '=', 'published')->sort('created', 'desc')->take($limit)->get();

        Registry::set('rwar_latest_posts', $posts = new Items($posts));
    }

    if($result = $posts->valid()) {
        // register single post
        Registry::set('article', $posts->current());

        // move to next
        $posts->next();
    }
    else {
        // back to the start
        $posts->rewind();

        // reset original article
        Registry::set('article', Registry::get('original_article'));

        // remove items
        Registry::set('rwar_latest_posts', false);
    }

    return $result;
}