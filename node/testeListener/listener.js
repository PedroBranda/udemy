// counters object
let counters = {
	monitors: [],
	totalUnsignedTasks: 0,
	totalAvailableTasks: 0,
};

// event_type enum
const ASSIGN = 1;
const NOT_ASSIGN = 2;
const IGNORE = 3;
const ACTIVATE = 4;
const NOTIFICATE = 5;
const FORCE_NOTIFICATION = 6;
const EXIT = 7;

exports.listen = (req) => {
	const monitorIsInArray = (el) => {
		return el.userId === req.user_id;
	};

	switch (req.event_type) {
		case ASSIGN:
			if (!counters.monitors.find(monitorIsInArray)) {
				counters.monitors.push({
					userName: req.user_name,
					userId: req.user_id,
					availableTasks: 1,
					ignoredTasks: 0,
					activatedTasks: 0,
					notificatedTasks: 0,
					forcedNotificationsTasks: 0,
				});
				break;
			}
			counters.monitors = counters.monitors.map((el) => {
				const monitor = { ...el };
				if (monitor.userId === req.user_id) {
					return { ...monitor, availableTasks: monitor.availableTasks + 1 };
				}
				return monitor;
			});
			break;
		case NOT_ASSIGN:
			counters.totalUnsignedTasks = counters.totalUnsignedTasks + 1;
			break;
		case EXIT:
			counters.monitors = counters.monitors.map((el) => {
				const monitor = { ...el };
				if (monitor.userId === req.user_id) {
					return { ...monitor, availableTasks: 0 };
				}
				return monitor;
			});
			break;
		case IGNORE:
			counters.monitors = counters.monitors.map((el) => {
				const monitor = { ...el };
				if (monitor.userId === req.user_id) {
					return {
						...monitor,
						ignoredTasks: monitor.ignoredTasks + 1,
						availableTasks: monitor.availableTasks - 1,
					};
				}
				return monitor;
			});
			break;
		case ACTIVATE:
			counters.monitors = counters.monitors.map((el) => {
				const monitor = { ...el };
				if (monitor.userId === req.user_id) {
					return {
						...monitor,
						activatedTasks: monitor.activatedTasks + 1,
						availableTasks: monitor.availableTasks - 1,
					};
				}
				return monitor;
			});
			break;
		case NOTIFICATE:
			counters.monitors = counters.monitors.map((el) => {
				const monitor = { ...el };
				if (monitor.userId === req.user_id) {
					return {
						...monitor,
						notificatedTasks: monitor.notificatedTasks + 1,
						availableTasks: monitor.availableTasks - 1,
					};
				}
				return monitor;
			});
			break;
		case FORCE_NOTIFICATION:
			counters.monitors = counters.monitors.map((monitor) => {
				if (monitor.userId === req.user_id) {
					return {
						...monitor,
						forcedNotificationsTasks: monitor.forcedNotificationsTasks + 1,
						availableTasks: monitor.availableTasks - 1,
					};
				}
				return monitor;
			});
			break;

		default:
			break;
	}
	return counters;
};
