import React, { useCallback, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import RevisePortfolio from './RevisePortfolio';
import ReviseAbility from './ReviseAbility';
import ReviseWork from './ReviseWork';

const PortManage = ({  }) => {

	return (
		<>
			<RevisePortfolio />
			<ReviseAbility />
			<ReviseWork />
		</>
	);
};

PortManage.propTypes = {

};

export default PortManage;
