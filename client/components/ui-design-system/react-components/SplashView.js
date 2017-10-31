'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

//Components
const SplashViewGraphic = require('../react-components/SplashViewGraphic.js').default;

function SplashView(props) {
    const {
        graphic,
        isLoading,
        isError,
        hasNoBorder,
        headlineText,
        children
    } = props;

    return (
        <section className={classNames('empty-view', {
            'empty-view-has-no-border': hasNoBorder
        })}
        >
            <SplashViewGraphic
                fallback={graphic}
                isError={isError}
                isLoading={isLoading}
            />
            <div className={classNames('empty-view-text', {
                'empty-view-text-is-error': isError
            })}
            >
                {headlineText}
            </div>
            {children}
        </section>
    );
}

SplashView.propTypes = {
    graphic: PropTypes.node,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    hasNoBorder: PropTypes.bool,
    headlineText: PropTypes.string.isRequired,
    children: PropTypes.node
};

SplashView.defaultProps = {
    graphic: '',
    hasNoBorder: false,
    isLoading: false,
    isError: false,
    children: '',
};

export default SplashView;
